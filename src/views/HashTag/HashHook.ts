import hooks from '@hook';
import { UseHashTagElementParams, UseHashTagElement } from 'types';

const useHashTagElement = ({ offset }: UseHashTagElementParams): UseHashTagElement => {
  const { hashTags, setHashTags } = hooks.useHashTags({ offset });

  return {
    hashTags,
    setHashTags,
  };
};

export {
  useHashTagElement,
}
