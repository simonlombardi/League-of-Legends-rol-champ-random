import React from 'react';
import Champion from './RolChampion';


export default function Team({champions}) {
  return (
    <div className='container-five-champs'>
      <Champion rol="Top" champ={champions.top} quantity="5" />
      <Champion rol="Jungler" champ={champions.jungler} quantity="5" />
      <Champion rol="Mid" champ={champions.mid} quantity="5" />
      <Champion rol="Adc" champ={champions.adc} quantity="5" />
      <Champion rol="Support" champ={champions.support} quantity="5" />
    </div>
  )
}
