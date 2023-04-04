const RenderingList=()=>{
    const list1=["Aravind","Madhavi","Nayan","Aishwarya"];
    const list3=[
        {
            name:"Aishwarya kolshikwar",
            age:22
        },
        {
            name:"revathi",
            age:23
        }
    ];
        
    const list2=list1.map((x)=>{
        return <li>{x}</li>
    })
    const list4=list3.map(
        (y)=>{
            return (
                <div>
                    <li>{y.name}</li>
                    <li>{y.age}</li>
                </div>
             
            );
        }
    )
    return(
      <div>
        <ol>{list2}</ol>
        <h2>demo</h2>
        <ol>{list4}</ol>
      </div>
    );
}
export default RenderingList;