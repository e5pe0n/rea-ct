interface Color {
    readonly rgb: string;
    opacity: number;
    name?: string;
}

const turquoise: Color = { rgb: '00afcc', opacity: 1 };
turquoise.name = 'Turquoise Blue';
turquoise.rgb = '03c1ff';   // error