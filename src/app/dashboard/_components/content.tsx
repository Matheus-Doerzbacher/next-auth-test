import React from 'react'

type Props = {
  texto: string
}

export default function Content({ texto }: Props) {
  return <div>{texto}</div>
}
