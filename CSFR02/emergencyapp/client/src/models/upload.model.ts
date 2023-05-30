export interface uploadFull{
    content: uploadContent,
    attachment: uploadAttachment,
}

export interface uploadContent{
    name: string,
    question: string,
}

export interface uploadAttachment{
    files: File[]
}