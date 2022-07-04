import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requests } from '../../api/requests';
import { LoginRequest } from '../../api/types';
import { userLoggedIn } from '../../store/slices/userSlice';

export const useLoginScreenData = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<LoginRequest>({
    fio: '',
    password: '',
  });
  const [error, setError] = useState<any>();
  const [hasError, setHasError] = useState<any>();
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  let handleChange = (key: keyof LoginRequest) => (value: string) => {
    console.log({key, value});

    setState({...state, [key]: value});
  };
  const onDateChange = (e: string) => {
    if (error) {
      setError({});
    }
    setDate(e);
  };
  let onRegisterPress = async () => {
    try {
      setLoading(true);
      let res = await requests.auth.login(state as LoginRequest);
      dispatch(userLoggedIn(res.data));
      console.log(res.data);
    } catch (error) {
      setHasError({
        border: error?.response?.data?.error,
      });
      setError({
        message:
          error?.response?.data?.errorMessage || 'Пожалуйста заполните поля',
      });
    } finally {
      setLoading(false);
    }
  };
  return {
    onRegisterPress,
    handleChange,
    state,
    loading,
    date,
    setDate,
    error,
    onDateChange,
    hasError,
    setHasError,
  };
};
