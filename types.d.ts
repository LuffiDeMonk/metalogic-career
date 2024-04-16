interface TemplateProps {
    children: React.ReactNode
}

interface SingleLinkProps {
    name: string,
    link: string
}

type CardWrapperProps = {
    children: React.ReactNode,
    className?: string
}

type ValueDataTypes = {
    id: string,
    title: string,
    description: string,
    image: string
}
type TitleContainerProps = {
    heading: string,
    subheading: string,
    description?: string
}

type FooterLinksProps = {
    title: string,
    links: Array<string>
}