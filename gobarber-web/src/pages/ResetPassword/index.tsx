import React, { useRef, useCallback } from 'react';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';

import { FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, AnimationContainer } from './styles';
import getValidationErrors from '../../utils/getValidationError';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface ResetPasswordFormData {
    password: string;
    password_confirmation: string;
}

const ResetPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast();

    const history = useHistory();
    const location = useLocation();

    const handleSubmit = useCallback(
        async (data: ResetPasswordFormData) => {
            try {
                formRef.current?.setErrors({});

                const schema = Yup.object().shape({
                    password: Yup.string().required('Password is required'),
                    password_confirmation: Yup.string().nullable().oneOf(
                        [Yup.ref('password'), null],
                        'Passwords must match'
                    ),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });

                const { password, password_confirmation } = data;
                const token = location.search.replace('?token=', '');

                if (!token) {
                    throw new Error();                
                }

                await api.post('/password/reset', {
                    password, 
                    password_confirmation,
                    token,
                });

                history.push('/');
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                }

                addToast({
                    type: 'error',
                    title: 'Reseting password error',
                    description: 'An error has occurred on the reseting password process, please try again'
                });
            }
    }, [addToast, history, location.search]);

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <img src={logoImg} alt="GoBarber"/>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Reset password</h1>

                        <Input 
                            name="password" 
                            icon={FiLock} 
                            type="password" 
                            placeholder="New password"
                        />

                        <Input 
                            name="password_confirmation" 
                            icon={FiLock} 
                            type="password" 
                            placeholder="Password confirmation"
                        />

                        <Button type="submit">
                            Change password
                        </Button>
                    </Form>
                </AnimationContainer>                
            </Content>
            <Background />
        </Container>
    );
}

export default ResetPassword;