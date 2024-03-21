import TextArea from 'antd/es/input/TextArea';
import   React, { useState } from 'react';

const FormElementsDemo = () => {
    const [TextArea , setTextArea] = useState('');
    
    function handleChange( e: React.ChangeEvent<HTMLTextAreaElement>) {
        setTextArea(e.target.value);
    }

    return <>

       <div>
       <textarea  value={TextArea} onChange={handleChange}></textarea>
       {TextArea}
       </div>
    </>
}

export default FormElementsDemo;