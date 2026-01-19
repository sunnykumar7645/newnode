type Greetname = {
    name : String
    maessageCount: number
    isLoggedIn: boolean
}


export const Props = (props: Greetname) => {
    return (
    <>
    {
        props.isLoggedIn ? `\n Hi ${props.name}, You have ${props.maessageCount} unread message...`:"Welcome Guest!"
    }
     
    </>
    

    );
}