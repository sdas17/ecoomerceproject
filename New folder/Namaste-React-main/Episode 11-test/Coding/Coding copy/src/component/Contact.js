const Contact = ()=>{
    return (
        <div>
            <h2 className="text-3xl font-bold p-4 m-4 ">Contact Page</h2>
            <form>
                <input type="text" placeholder="name" className="border border-black p-2 m-2 "></input>
                <input type="password" placeholder="password" className="border border-black p-2 m-2 "></input>
                <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg ">Enter</button>
            </form>

        </div>
    )
}
export default Contact;