<?php


namespace StackTrace\Ui\Table;


use Illuminate\Contracts\Support\Arrayable;

class Style implements Arrayable
{
    /**
     * A font-weight property.
     */
    protected ?string $fontWeight = null;

    /**
     * A font-family property.
     */
    protected ?string $fontFamily = null;

    /**
     * A white-space property.
     */
    protected ?string $whitespace = null;

    /**
     * A font-variant-numeric property.
     */
    protected ?string $fontVariantNumeric = null;

    /**
     * A text-decoration-line property.
     */
    protected ?string $textDecorationLine = null;

    /**
     * A text-align property.
     */
    protected ?string $textAlign = null;

    /**
     * Vertical alignment of the cell.
     */
    protected ?string $verticalAlign = null;

    /**
     * A font-style property.
     */
    protected ?string $fontStyle = null;

    /**
     * A color property.
     */
    protected ?string $color = null;

    /**
     * Set a font weight.
     */
    public function fontWeight(?string $weight): static
    {
        $this->fontWeight = $weight;

        return $this;
    }

    /**
     * Retrieve configured font weight value.
     */
    public function getFontWeight(): ?string
    {
        return $this->fontWeight;
    }

    /**
     * Set a font-weight to "100".
     */
    public function fontThin(): static
    {
        return $this->fontWeight('thin');
    }

    /**
     * Set a font-weight to "200".
     */
    public function fontExtralight(): static
    {
        return $this->fontWeight('extralight');
    }

    /**
     * Set a font-weight to "300".
     */
    public function fontLight(): static
    {
        return $this->fontWeight('light');
    }

    /**
     * Set a font-weight to "400".
     */
    public function fontNormal(): static
    {
        return $this->fontWeight('normal');
    }

    /**
     * Set a font-weight to "500".
     */
    public function fontMedium(): static
    {
        return $this->fontWeight('medium');
    }

    /**
     * Set a font-weight to "600".
     */
    public function fontSemibold(): static
    {
        return $this->fontWeight('semibold');
    }

    /**
     * Set a font-weight to "700".
     */
    public function fontBold(): static
    {
        return $this->fontWeight('bold');
    }

    /**
     * Set a font-weight to "800".
     */
    public function fontExtrabold(): static
    {
        return $this->fontWeight('extrabold');
    }

    /**
     * Set a font-weight to "900".
     */
    public function fontBlack(): static
    {
        return $this->fontWeight('black');
    }

    /**
     * Set the font family.
     */
    public function fontFamily(?string $family): static
    {
        $this->fontFamily = $family;

        return $this;
    }

    /**
     * Retrieve configured font family value.
     */
    public function getFontFamily(): ?string
    {
        return $this->fontFamily;
    }

    /**
     * Set the font family to "sans".
     */
    public function fontSans(): static
    {
        return $this->fontFamily('sans');
    }

    /**
     * Set the font family to "serif".
     */
    public function fontSerif(): static
    {
        return $this->fontFamily('serif');
    }

    /**
     * Set the font family to "mono".
     */
    public function fontMono(): static
    {
        return $this->fontFamily('mono');
    }

    /**
     * Set a text white space.
     */
    public function whitespace(?string $value): static
    {
        $this->whitespace = $value;

        return $this;
    }

    /**
     * Retrieve configured white space value.
     */
    public function getWhitespace(): ?string
    {
        return $this->whitespace;
    }

    /**
     * Set a white space to "normal".
     */
    public function whitespaceNormal(): static
    {
        return $this->whitespace('normal');
    }

    /**
     * Set a white space to "nowrap".
     */
    public function whitespaceNowrap(): static
    {
        return $this->whitespace('nowrap');
    }

    /**
     * Set a white space to "pre".
     */
    public function whitespacePre(): static
    {
        return $this->whitespace('pre');
    }

    /**
     * Set a white space to "pre-line".
     */
    public function whitespacePreLine(): static
    {
        return $this->whitespace('preLine');
    }

    /**
     * Set a white space to "pre-wrap".
     */
    public function whitespacePreWrap(): static
    {
        return $this->whitespace('preWrap');
    }

    /**
     * Set a white space to "break-spaces".
     */
    public function whitespaceBreakSpaces(): static
    {
        return $this->whitespace('breakSpaces');
    }

    /**
     * Set a font variant numeric property.
     */
    public function fontVariantNumeric(?string $variant): static
    {
        $this->fontVariantNumeric = $variant;

        return $this;
    }

    /**
     * Retrieve configured font variant numeric value.
     */
    public function getFontVariantNumeric(): ?string
    {
        return $this->fontVariantNumeric;
    }

    /**
     * Set a font variant numeric to "normal".
     */
    public function numsNormal(): static
    {
        return $this->fontVariantNumeric("normal");
    }

    /**
     * Set a font variant numeric to "ordinal".
     */
    public function numsOrdinal(): static
    {
        return $this->fontVariantNumeric("ordinal");
    }

    /**
     * Set a font variant numeric to "slashed-zero".
     */
    public function numsSlashedZero(): static
    {
        return $this->fontVariantNumeric("slashedZero");
    }

    /**
     * Set a font variant numeric to "lining-nums".
     */
    public function numsLining(): static
    {
        return $this->fontVariantNumeric("lining");
    }

    /**
     * Set a font variant numeric to "oldstyle-nums".
     */
    public function numsOldStyle(): static
    {
        return $this->fontVariantNumeric("oldStyle");
    }

    /**
     * Set a font variant numeric to "proportional-nums".
     */
    public function numsProportional(): static
    {
        return $this->fontVariantNumeric("proportional");
    }

    /**
     * Set a font variant numeric to "tabular-nums".
     */
    public function numsTabular(): static
    {
        return $this->fontVariantNumeric("tabular");
    }

    /**
     * Set a font variant numeric to "diagonal-fractions".
     */
    public function numsDiagonalFractions(): static
    {
        return $this->fontVariantNumeric("diagonalFractions");
    }

    /**
     * Set a font variant numeric to "stacked-fractions".
     */
    public function numsStackedFractions(): static
    {
        return $this->fontVariantNumeric("stackedFractions");
    }

    /**
     * Set a text decoration line property.
     */
    public function textDecorationLine(?string $decoration): static
    {
        $this->textDecorationLine = $decoration;

        return $this;
    }

    /**
     * Retrieve configured text decoration line value.
     */
    public function getTextDecorationLine(): ?string
    {
        return $this->textDecorationLine;
    }

    /**
     * Set text decoration line to "underline".
     */
    public function textDecorationUnderline(): static
    {
        return $this->textDecorationLine('underline');
    }

    /**
     * Set text decoration line to "overline".
     */
    public function textDecorationOverline(): static
    {
        return $this->textDecorationLine('overline');
    }

    /**
     * Set text decoration line to "line-through".
     */
    public function textDecorationLineThrough(): static
    {
        return $this->textDecorationLine('lineThrough');
    }

    /**
     * Set text decoration line to "no-underline".
     */
    public function textDecorationNoUnderline(): static
    {
        return $this->textDecorationLine('noUnderline');
    }

    /**
     * Set a text alignment property.
     */
    public function align(?string $align): static
    {
        $this->textAlign = $align;

        return $this;
    }

    /**
     * Retrieve configured text align value.
     */
    public function getAlign(): ?string
    {
        return $this->textAlign;
    }

    /**
     * Set a text align property to "left".
     */
    public function alignLeft(): static
    {
        return $this->align("left");
    }

    /**
     * Set a text align property to "center".
     */
    public function alignCenter(): static
    {
        return $this->align("center");
    }

    /**
     * Set a text align property to "right".
     */
    public function alignRight(): static
    {
        return $this->align("right");
    }

    /**
     * Set a text align property to "justify".
     */
    public function alignJustify(): static
    {
        return $this->align("justify");
    }

    /**
     * Set a text align property to "start".
     */
    public function alignStart(): static
    {
        return $this->align("start");
    }

    /**
     * Set a text align property to "end".
     */
    public function alignEnd(): static
    {
        return $this->align("end");
    }

    /**
     * Set vertical align property.
     */
    public function verticalAlign(?string $align): static
    {
        $this->verticalAlign = $align;

        return $this;
    }

    /**
     * Retrieve configured vertical align value.
     */
    public function getVerticalAlign(): ?string
    {
        return $this->verticalAlign;
    }

    /**
     * Set vertical align to "baseline";
     */
    public function verticalAlignBaseline(): static
    {
        return $this->verticalAlign("baseline");
    }

    /**
     * Set vertical align to "top";
     */
    public function verticalAlignTop(): static
    {
        return $this->verticalAlign("top");
    }

    /**
     * Set vertical align to "middle";
     */
    public function verticalAlignMiddle(): static
    {
        return $this->verticalAlign("middle");
    }

    /**
     * Set vertical align to "bottom";
     */
    public function verticalAlignBottom(): static
    {
        return $this->verticalAlign("bottom");
    }

    /**
     * Set vertical align to "text-top";
     */
    public function verticalAlignTextTop(): static
    {
        return $this->verticalAlign("textTop");
    }

    /**
     * Set vertical align to "text-bottom";
     */
    public function verticalAlignTextBottom(): static
    {
        return $this->verticalAlign("textBottom");
    }

    /**
     * Set vertical align to "sub";
     */
    public function verticalAlignSub(): static
    {
        return $this->verticalAlign("sub");
    }

    /**
     * Set vertical align to "super";
     */
    public function verticalAlignSuper(): static
    {
        return $this->verticalAlign("super");
    }

    /**
     * Set a font style property.
     */
    public function fontStyle(?string $style): static
    {
        $this->fontStyle = $style;

        return $this;
    }

    /**
     * Retrieve configured font style.
     */
    public function getFontStyle(): ?string
    {
        return $this->fontStyle;
    }

    /**
     * Set a font style property to "italic".
     */
    public function italic(): static
    {
        return $this->fontStyle("italic");
    }

    /**
     * Set a font style property to "not-italic".
     */
    public function notItalic(): static
    {
        return $this->fontStyle("notItalic");
    }

    /**
     * Set a color property.
     */
    public function color(?string $color): static
    {
        $this->color = $color;

        return $this;
    }

    /**
     * Retrieve configured text color.
     */
    public function getColor(): ?string
    {
        return $this->color;
    }

    /**
     * Set a color property to "foreground".
     */
    public function colorForeground(): static
    {
        return $this->color("foreground");
    }

    /**
     * Set a color property to "muted".
     */
    public function colorMuted(): static
    {
        return $this->color("muted");
    }

    public function toArray()
    {
        return [
            'fontWeight' => $this->fontWeight,
            'fontFamily' => $this->fontFamily,
            'whitespace' => $this->whitespace,
            'fontVariantNumeric' => $this->fontVariantNumeric,
            'textDecorationLine' => $this->textDecorationLine,
            'textAlign' => $this->textAlign,
            'verticalAlign' => $this->verticalAlign,
            'fontStyle' => $this->fontStyle,
            'color' => $this->color,
        ];
    }
}
