import SvgIcon from '@elementor/ui/SvgIcon';

const ReadableFontIcon = (props, { size }) => {
	return (
		<SvgIcon viewBox="0 0 24 24" fontSize={size} {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.5 5.75C5.77065 5.75 5.07118 6.03973 4.55546 6.55546C4.03973 7.07118 3.75 7.77065 3.75 8.5V12.25H9.25V8.5C9.25 7.77065 8.96027 7.07118 8.44454 6.55546C7.92882 6.03973 7.22935 5.75 6.5 5.75ZM10.75 8.5C10.75 7.37283 10.3022 6.29183 9.5052 5.4948C8.70817 4.69777 7.62717 4.25 6.5 4.25C5.37283 4.25 4.29183 4.69777 3.4948 5.4948C2.69777 6.29183 2.25 7.37283 2.25 8.5V19C2.25 19.4142 2.58579 19.75 3 19.75C3.41421 19.75 3.75 19.4142 3.75 19V13.75H9.25V19C9.25 19.4142 9.58579 19.75 10 19.75C10.4142 19.75 10.75 19.4142 10.75 19V8.5ZM14.4948 12.4948C15.2918 11.6978 16.3728 11.25 17.5 11.25C18.511 11.25 19.4849 11.6102 20.25 12.2596V12C20.25 11.5858 20.5858 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12V19C21.75 19.4142 21.4142 19.75 21 19.75C20.5858 19.75 20.25 19.4142 20.25 19V18.7404C19.4849 19.3898 18.511 19.75 17.5 19.75C16.3728 19.75 15.2918 19.3022 14.4948 18.5052C13.6978 17.7082 13.25 16.6272 13.25 15.5C13.25 14.3728 13.6978 13.2918 14.4948 12.4948ZM17.5 12.75C16.7707 12.75 16.0712 13.0397 15.5555 13.5555C15.0397 14.0712 14.75 14.7707 14.75 15.5C14.75 16.2293 15.0397 16.9288 15.5555 17.4445C16.0712 17.9603 16.7707 18.25 17.5 18.25C18.2293 18.25 18.9288 17.9603 19.4445 17.4445C19.9603 16.9288 20.25 16.2293 20.25 15.5C20.25 14.7707 19.9603 14.0712 19.4445 13.5555C18.9288 13.0397 18.2293 12.75 17.5 12.75Z"
			/>
		</SvgIcon>
	);
};

export default ReadableFontIcon;
