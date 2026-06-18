


export default function Friend({friend}){
    console.log(friend);
    const {name,email,age,phone} = friend;
    return(

        <div className="card">
            <h4> Name:{name} </h4>
            <p> Email:{email} </p>
            <p> Age:{age} </p>
            <p> Phone:{phone} </p>
        </div>

    )

}