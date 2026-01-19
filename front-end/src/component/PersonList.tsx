type ListOfPersons={
    name:{
    first: string
    last:string
    }[]
};


export const PersonList = (props:ListOfPersons) => {
  return (
    <div>
        {props.name.map(name =>{
            return(
                <h2>{name.first} {name.last}</h2>
            )
        })

        }
        <h2>hi</h2>
    </div>
    )
}
