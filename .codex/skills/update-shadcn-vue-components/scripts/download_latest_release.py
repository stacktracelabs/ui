#!/usr/bin/env python3
"""Download and unpack the latest unovue/shadcn-vue GitHub release."""

from __future__ import annotations

import argparse
import json
import shutil
import tempfile
import urllib.request
import zipfile
from pathlib import Path


API_URL = "https://api.github.com/repos/unovue/shadcn-vue/releases/latest"
GITHUB_HEADERS = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
}


def fetch_json(url: str) -> dict:
    request = urllib.request.Request(url, headers=GITHUB_HEADERS)
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def download(url: str, destination: Path) -> None:
    request = urllib.request.Request(url, headers=GITHUB_HEADERS)
    with urllib.request.urlopen(request, timeout=120) as response:
        destination.write_bytes(response.read())


def find_release_root(unpack_dir: Path) -> Path:
    candidates = [
        path
        for path in unpack_dir.rglob("apps/v4/registry/new-york-v4/ui")
        if path.is_dir()
    ]
    if not candidates:
        raise RuntimeError("Could not find apps/v4/registry/new-york-v4/ui in the release archive")
    return candidates[0].parents[4]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", default="/private/tmp", help="Directory where the release folder should be created")
    parser.add_argument("--name", default=None, help="Optional output folder name")
    args = parser.parse_args()

    release = fetch_json(API_URL)
    tag = release["tag_name"]
    zipball_url = release["zipball_url"]

    output = Path(args.output).expanduser().resolve()
    output.mkdir(parents=True, exist_ok=True)
    release_dir = output / (args.name or f"shadcn-vue-{tag}")
    archive_path = Path(tempfile.gettempdir()) / f"shadcn-vue-{tag}.zip"

    if release_dir.exists():
        shutil.rmtree(release_dir)

    download(zipball_url, archive_path)

    with tempfile.TemporaryDirectory() as tmp:
        tmp_path = Path(tmp)
        with zipfile.ZipFile(archive_path) as archive:
            archive.extractall(tmp_path)
        source_root = find_release_root(tmp_path)
        shutil.move(str(source_root), release_dir)

    print(release_dir)
    print(release_dir / "apps/v4/registry/new-york-v4/ui")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
