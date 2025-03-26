import SvgIcon from '@elementor/ui/SvgIcon';

const StatementIcon = (props, { size }) => {
	return (
		<SvgIcon viewBox="0 0 16 20" fontSize={size} {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M3 1.75C2.66848 1.75 2.35054 1.8817 2.11612 2.11612C1.8817 2.35054 1.75 2.66848 1.75 3V17C1.75 17.3315 1.8817 17.6495 2.11612 17.8839C2.35054 18.1183 2.66848 18.25 3 18.25H13C13.3315 18.25 13.6495 18.1183 13.8839 17.8839C14.1183 17.6495 14.25 17.3315 14.25 17V6.75H11C10.5359 6.75 10.0908 6.56563 9.76256 6.23744C9.43437 5.90925 9.25 5.46413 9.25 5V1.75H3ZM10.75 2.81066L13.1893 5.25H11C10.9337 5.25 10.8701 5.22366 10.8232 5.17678C10.7763 5.12989 10.75 5.0663 10.75 5V2.81066ZM1.05546 1.05546C1.57118 0.539731 2.27065 0.25 3 0.25H10C10.1989 0.25 10.3897 0.329018 10.5303 0.46967L15.5303 5.46967C15.671 5.61032 15.75 5.80109 15.75 6V17C15.75 17.7293 15.4603 18.4288 14.9445 18.9445C14.4288 19.4603 13.7293 19.75 13 19.75H3C2.27065 19.75 1.57118 19.4603 1.05546 18.9445C0.539731 18.4288 0.25 17.7293 0.25 17V3C0.25 2.27065 0.539731 1.57118 1.05546 1.05546ZM4.25 7C4.25 6.58579 4.58579 6.25 5 6.25H6C6.41421 6.25 6.75 6.58579 6.75 7C6.75 7.41421 6.41421 7.75 6 7.75H5C4.58579 7.75 4.25 7.41421 4.25 7ZM4.25 11C4.25 10.5858 4.58579 10.25 5 10.25H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H5C4.58579 11.75 4.25 11.4142 4.25 11ZM4.25 15C4.25 14.5858 4.58579 14.25 5 14.25H11C11.4142 14.25 11.75 14.5858 11.75 15C11.75 15.4142 11.4142 15.75 11 15.75H5C4.58579 15.75 4.25 15.4142 4.25 15Z"
			/>
		</SvgIcon>
	);
};

export default StatementIcon;
