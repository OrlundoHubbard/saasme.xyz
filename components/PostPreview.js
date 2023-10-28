import Link from "next/link"


const PostPreview = (props) => {
    return (
        <div>
            <Link href={`/posts/${props.slug}`}>
                <h2>{props.title}</h2>
            </Link>
            <div className="flex gap-4">
                <div className="border-2 border-solid px-3">Text</div>
                <h2>{props.date}</h2>
            </div>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default PostPreview;