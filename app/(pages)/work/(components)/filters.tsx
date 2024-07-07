import React from 'react';
import s from './filters.module.scss';

interface FiltersProps {
  categories: {
    [category: string]: number;
  }
  active: string;
  onCategoryChange: (category: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ categories, active, onCategoryChange }) => (
  <div className={s.filters}>
    {Object.entries(categories).map(([cat, count], i) => (
      <div key={i} className={`${s.filter} ${active === cat ? s.active : ""}`} onClick={() => onCategoryChange(cat)}>
        {cat}
        <span className={s.count}>
          {count}
        </span>
      </div>
    ))}
  </div>
);

export default Filters;