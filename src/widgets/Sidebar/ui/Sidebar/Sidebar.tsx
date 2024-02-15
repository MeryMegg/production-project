
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev  => !prev)
	}
	return (
		<div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>		
			<button onClick={onToggle}>toogle</button>
			<div className={cls.switcher}>
			<ThemeSwitcher />		
			{/* <LangSwitcher />		 */}
			</div>
		</div >
	)
}