import superagent from 'superagent';

const SixtOffersUrl = 'https://content.sixt.io/codingtasks/offers.json';

export function getOffersData() {
  return superagent
    .get(SixtOffersUrl)
    .then(data => data.body.offers)
    .catch(err => {
      console.log('No data could be loaded', err);
      return [];
    });
}
