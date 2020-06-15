import { get, map } from 'lodash';
import dayjs from 'dayjs';
import hooks from '@hook';
import { UseHashTagElementParams, UseHashTagElement } from 'types';

const useHashTagElement = ({ offset }: UseHashTagElementParams): UseHashTagElement => {
  const { hashTag, setHashTag } = hooks.useHashTags({ offset });
  const count = get(hashTag, 'count');
  const hashTagResults = map(get(hashTag, 'results'), (r) => ({
    ...r,
    hashtags: r.hashtags.slice(0, 2),
    date: dayjs(r.date).format('MMM D, YYYY'),
  }));
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
