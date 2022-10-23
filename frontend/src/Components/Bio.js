
import React from "react"
export const Bio=()=>{

    return(

        <div align='center'> 
                <h1>Personal Information</h1>
            <table>

                <tr>

                    <td className="heading"> <h3>Full Name</h3>  </td>
                    <td className="content"> Hamza Azam</td>

                </tr>
                <tr>

                    <td className="heading"> <h3>Degree Name</h3> </td>
                    <td className="content"> Software Engineering</td>

                </tr>

                <tr>
                    <td className="heading"> <h3>Skill</h3></td>
                    <td className="content"> [java, C++, C#, React]</td>
                </tr>
                


            </table>

        </div>
    )
}

export const CV=(props)=>{

    return(

        <header>
            { props.img}
            <br/>
            <h1>{props.name} </h1>
        </header>
    )

}

export const Information =(props)=>{

    return(

        <div align='center'>
            <table>

                <tr>
                    <td>  Address</td>
                    <td> {props.address} </td>
                </tr>

                <tr>
                    <td> Contact Details </td>
                    <td>{ props.contactDetails} </td>
                </tr>

            </table>

        </div>


    )
}


export const Education =(props)=>{

    return(

        
        <div align='center'>
            <table>

                <tr>
                    <td>  FSC</td>
                    <td> {props.fsc} </td>
                </tr>

                <tr>
                    <td> BSCS </td>
                    <td>{ props.bscs} </td>
                </tr>

            </table>

        </div>



    )

}

export const Experience =(props)=>{

    return(
        
        <div align='center'>
            <table>

                <tr>
                    <td>  Company Name</td>
                    <td> {props.cName} </td>
                </tr>

                <tr>
                    <td> Start and End  </td>
                    <td>{ props.SE_Date} </td>
                </tr>

                <tr>
                    <td> Responsibilities </td>

                    <td>{ props.resp} </td>
                </tr>

            </table>

        </div>


    )
}

export const Skill =(props)=>{


    return(


         
        <div align='center'>
            <table>

                <tr>
                    <td>  Skill </td>
                    <td> {props.skill} </td>
                </tr>

            </table>

        </div>



    )
}


export const Hobbies =(props)=>{


    return(


         
        <div align='center'>
            <table>

                <tr>
                    <td>  Hobbies </td>
                    <td> {props.hob} </td>
                </tr>

            </table>

        </div>



    )
}
