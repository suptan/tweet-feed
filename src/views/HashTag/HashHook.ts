import { get } from 'lodash';
import hooks from '@hook';
import { UseHashTagElementParams, UseHashTagElement } from 'types';

const useHashTagElement = ({ offset }: UseHashTagElementParams): UseHashTagElement => {
  const { hashTag, setHashTag } = hooks.useHashTags({ offset });
  const hashTagResults = get(hashTag, 'results');
  const count = get(hashTag, 'count');
  // const offset = get(hashTag, 'offset');

  return {
    hashTagResults,
    count,
    hashTag,
    setHashTag,
  };
};

export {
  useHashTagElement,
}
