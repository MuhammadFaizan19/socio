import React, { useRef } from 'react'
import classes from './CreatePost.module.css'

const CreatePost: React.FC = () => {
    const fileInput = useRef<HTMLInputElement>(null)

    const fileInputHandler = () => {
        const file = fileInput.current!.files;
        if (file![0]) {
            const { name: fileName, size } = file![0];
            const fileSize = (size / 1000).toFixed(2);
            const fileNameAndSize = `${fileName} - ${fileSize}KB`;
            document.querySelector('#fileName')!.textContent = fileNameAndSize;
        }
    };

    return (
        <div className={classes.Container} >
            <p className={classes.Text} >Create A Post</p>
            <div className={classes.Create}>
                <div className={classes.InputContainer}>
                    <textarea rows={3} required />
                    <label>Description</label>
                </div>            <div className={classes.Buttons} >
                    <div className={classes.FileInput}>
                        <input type="file" accept='image/*' onChange={fileInputHandler} id="file" ref={fileInput} className={classes.File} />
                        <label htmlFor="file">
                            Select Image
                <p id='fileName' className={classes.FileName}></p>
                        </label>
                    </div>
                    <button className={classes.CreateBtn} >Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost