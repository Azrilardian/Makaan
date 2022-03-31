const urlSplitter = (url) => {
  const urlsSplits = url.split('/');
  return {
    resource: urlsSplits[1] || null,
    id: urlsSplits[2] || null,
    verb: urlsSplits[3] || null,
  };
};

const urlCombiner = (splitedrUrl) => (splitedrUrl.resource ? `/${splitedrUrl.resource}` : '/') + (splitedrUrl.id ? '/:id' : '') + (splitedrUrl.verb ? `/${splitedrUrl.verb}` : '');

const parseActiveUrlWithCombiner = () => {
  const url = window.location.hash.slice(1).toLowerCase();
  const splitedrUrl = urlSplitter(url);
  return urlCombiner(splitedrUrl);
};

const parseActiveUrlWithoutCombiner = () => {
  const url = window.location.hash.slice(1).toLowerCase();
  return urlSplitter(url);
};

export {
  parseActiveUrlWithCombiner,
  parseActiveUrlWithoutCombiner,
};
