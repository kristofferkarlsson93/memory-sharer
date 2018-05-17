import knownErrors from '../constants/knownErrors';

export const isKnownError = (error)  => {
  return !!knownErrors[error];
}