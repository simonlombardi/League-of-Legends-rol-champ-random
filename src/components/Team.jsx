import React from 'react';
import Champion from './RolChampion';


export default function Team({champions}) {
  return (
    <div className='container-five-champs'>
      <Champion rol="Top" champ={champions.top} quantity="5" />
      <Champion rol="Jg" champ={champions.jungler} quantity="5" />
      <Champion rol="Mid" champ={champions.mid} quantity="5" />
      <Champion rol="ADC" champ={champions.adc} quantity="5" />
      <Champion rol="Supp" champ={champions.support} quantity="5" />
    </div>
  )
}
