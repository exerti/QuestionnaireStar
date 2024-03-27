
/**
 * Context 上下文
 * 使用context 实现跨组件传递数据
 *  Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。
 * 这个例子就是使用 context 实现主题切换
 * 使用context 需要先创建一个 context 对象
 *  const ThemeContext = createContext(Theme.dark);
 * 然后使用provider 组件包裹需要传递数据的组件
 *  <ThemeContext.Provider value={theme}>
 * 随后在需要使用数据的组件中使用 consumer 组件包裹需要使用数据的组件
 * 导入上下文，使用useContext 方法获取上下文中的数据
 *  import { ThemeContext } from './context';
 *  使用定义的数据，完成 组件的渲染
 */


import React, { useState, useEffect, FC, createContext } from 'react';
import ToolBar from './toobar';





const Theme = {
    dark: {
        backgroundColor: '#000',
        color: '#fff'
    },
    light: {
        backgroundColor: '#fff',
        color: '#000'
    }
}

export const ThemeContext = createContext(Theme.dark);

const  ContextDemo:FC = () => {
    const  [theme, setTheme] = useState(Theme.dark);
    function changeTheme() {
        setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
    }
    return <div>

        <ThemeContext.Provider value={theme}>
            <h1>Context Demo</h1>
            <button onClick={changeTheme}>切换主题</button>
            <ToolBar></ToolBar>
        </ThemeContext.Provider>
    </div>;
}

export default ContextDemo;