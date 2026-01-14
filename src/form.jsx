function Form(){
    return(
        <>
       <div className="form-container">
        <div className="inner">
        <input type="text" placeholder="Top Text"/>
        <input type="text" placeholder="Bottom Text" />
        </div>
        <button className="file-input">Get a new meme image</button>
        </div>
        </>
       
    );
}
export default Form;