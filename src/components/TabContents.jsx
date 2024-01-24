export default function TabContents({title, description, code}){
    return(
        <><h3>{title}</h3>
        <p>{description}</p>
        <pre>
            <code>
                {code}
            </code>
        </pre>
        </>
    );
}