
const Button: React.FC<{
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
}> = ({ handleClick, text }): JSX.Element => {
    return (
        <button onClick={handleClick} type="submit"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90">
            {text}
        </button>
    );
};

export default Button