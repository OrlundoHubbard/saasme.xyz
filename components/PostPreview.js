import Link from "next/link"


const PostPreview = (props) => {
    return (
        <div>
            <Link href={`/posts/${props.slug}`}>
                <h2>{props.title}</h2>
            </Link>
            <h2>{props.subtitle}</h2>
            <h2>{props.date}</h2>
        </div>
    )
}

export default PostPreview;