/*
 *  Copyright (c) 2022 Matteu
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

import React from 'react';
import { Field } from 'formik';

interface HCTextFieldProps {
    id: string;
    label: string;
    helper?: string;
    type?: string;
    rows?: number;
    errors?: Record<string, string>;
    isRequired?: boolean;
}

const HCTextField: React.FC<HCTextFieldProps> = ({ id, label, helper, isRequired, errors, type = 'text', rows = 5 }) => {
    if (type == 'textarea') {
        return (
            <label className={`hc-text-field${ errors ? ' error' : '' }`}>
                <Field name={ id } className="hc-text-field__input" placeholder="a" as="textarea" rows={ rows } required={ isRequired } />
                <span className="hc-text-field__label">{ label }</span>
                <small className="hc-text-field__helper">{ helper }</small>
            </label>
        );
    } else {
        return (
            <label className={`hc-text-field${ errors ? ' error' : '' }`}>
                <Field name={ id } type={ type } className="hc-text-field__input" placeholder="a" required={ isRequired } />
                <span className="hc-text-field__label">{ label }</span>
                <small className="hc-text-field__helper">{ helper }</small>
            </label>
        );
    }
};

export default HCTextField;