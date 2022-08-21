import Card from 'components/card/card';
import { CardClassName } from 'const/const';
import { OfferType } from 'types/offer-type';
import { memo } from 'react';

type OfferListPropsType = {
 offers: OfferType[];
 onCardMouseOver?: (id:number) => void;
 onCardMouseOut?: () => void;
}

function OffersList({offers, onCardMouseOver, onCardMouseOut}: OfferListPropsType): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        (
          <Card
            key={offer.id}
            className={CardClassName.Sities}
            offer={offer}
            onMouseOver={onCardMouseOver}
            onMouseOut={onCardMouseOut}
          />
        )
      )}
    </div>
  );
}

export default memo(OffersList);
