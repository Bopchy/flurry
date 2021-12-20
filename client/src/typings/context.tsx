export interface ITempFormatProvider {
    children: React.ReactNode
}

export interface ITempFormatContext {
    format: string,
    update: () => void
}
