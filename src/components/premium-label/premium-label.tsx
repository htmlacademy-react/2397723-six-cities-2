type PremiumLabelProps = {
  isOfferMark?: boolean;
}

export default function PremiumLabel({isOfferMark}: PremiumLabelProps): React.JSX.Element {
  return (
    <div className={isOfferMark ? 'offer__mark' : 'place-card__mark'}>
      <span>Premium</span>
    </div>
  );
}
