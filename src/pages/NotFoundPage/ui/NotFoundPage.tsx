import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export function NotFoundPage() {
  const { t } = useTranslation('notFound');
  return (
    <div className={cls.notFoundPage}>
      {t('Страница не найдена')}
    </div>
  );
}
