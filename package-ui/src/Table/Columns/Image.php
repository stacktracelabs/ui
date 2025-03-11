<?php


namespace StackTrace\Ui\Table\Columns;


use StackTrace\Ui\Style\Rounding;
use StackTrace\Ui\Table\Column;

class Image extends Column
{
    /**
     * The image width.
     */
    protected float $imageWidth = 2;

    /**
     * The image height.
     */
    protected float $imageHeight = 2;

    /**
     * The image rounding style.
     */
    protected Rounding $rounding = Rounding::Rounded;

    /**
     * Set the image rounding.
     */
    public function rounded(Rounding $rounding = Rounding::Rounded): static
    {
        $this->rounding = $rounding;

        return $this;
    }

    /**
     * Enable image rounding.
     */
    public function roundedFull(): static
    {
        return $this->rounded(Rounding::Full);
    }

    /**
     * Remove image rounding.
     */
    public function roundedNone(): static
    {
        return $this->rounded(Rounding::None);
    }

    /**
     * Set the image dimensions in rem units.
     */
    public function size(float $width, ?float $height = null): static
    {
        if (is_null($height)) {
            $this->imageWidth = $width;
            $this->imageHeight = $width;
        } else {
            $this->imageWidth = $width;
            $this->imageHeight = $height;
        }

        return $this;
    }

    public function toView($value, $resource): array
    {
        return [
            'src' => $value,
            'width' => $this->imageWidth,
            'height' => $this->imageHeight,
            'rounding' => $this->rounding->value,
        ];
    }

    public function component(): string
    {
        return 'DataTable::Columns/Image';
    }
}
