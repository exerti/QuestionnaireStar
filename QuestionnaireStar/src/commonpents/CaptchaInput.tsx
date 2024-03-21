import React, {useState, useEffect} from 'react';
import {Input, message} from 'antd';
import {SafetyCertificateOutlined} from '@ant-design/icons';
 

interface CaptchaInputValue {
  captchaCode?: string;
  captchaKey?: string;
}
 
interface CaptchaInputProps {
  value?: CaptchaInputValue;
  onChange?: (value: CaptchaInputValue) => void;
}
 
/**
 * 获取验证码
 */
// const getCaptcha = async () => {
//   try {
//     const data = await request(api.captcha);
//     if (data.code === 1) {
//       return data.data;
//     }
//   } catch (error) {
//     message.error('获取部门树失败,请重试');
//     return [];
//   }
//   message.error('获取部门树失败,请重试');
//   return [];
// }
 
const CaptchaInput: React.FC<CaptchaInputProps> = ({value = {}, onChange}) => {
 
//   const intl = useIntl();
  const [captchaCode, setCaptchaCode] = useState<string>('');
  const [captchaKey, setCaptchaKey] = useState<string>('');
  const [imageData, setImageData] = useState<string>('');
 
  // 触发改变
  const triggerChange = (changedValue: { captchaCode?: string; captchaKey?: string }) => {
    if (onChange) {
      onChange({captchaCode, captchaKey, ...value, ...changedValue});
    }
  };
 
  useEffect(() => {
    // getCaptcha().then((data: any) => {
    //   setCaptchaKey(data.captchaKey);
    //   setImageData(data.image);
    //   triggerChange({captchaKey: data.captchaKey});
    // })
  }, []);
 
 
  // 输入框变化
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value || '';
    if (code) {
      setCaptchaCode(code);
    }
    triggerChange({captchaCode: code});
  }
 
  // 时间类型变化
  const onClickImage = () => {
    // getCaptcha().then((data: any) => {
    //   setCaptchaKey(data.captchaKey);
    //   setImageData(data.image);
    //   triggerChange({captchaKey: data.captchaKey});
    // })
    console
  };
 
  return (
    <span>
       <Input.Group compact>
          <Input prefix={<SafetyCertificateOutlined style={{color: "#319cff"}}/>} placeholder={
        '请输入验证码'
        }
                 onChange={onChangeInput}
                 style={{width: '75%', marginRight: 5, padding: '6.5px 11px 6.5px 11px', verticalAlign: 'middle'}}/>
                   <img style={{width: '23%', height: '35px', verticalAlign: 'middle', padding: '0px 0px 0px 0px'}}
                        src={imageData} onClick={onClickImage}/>
       </Input.Group>
    </span>
  );
};
export default CaptchaInput;