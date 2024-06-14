import React from 'react';
import { Link } from 'react-router-dom'

type Props = {
    text?: string
    link?: string
    linkText?: string
}

const AuthFootLink = React.memo(({ text = '', link = '', linkText = '' }: Props) => (
    <p className="mt-6 text-center">
        {text}
        <Link to={link} className="text-primary">
            {linkText}
        </Link>
    </p>
));

export default AuthFootLink