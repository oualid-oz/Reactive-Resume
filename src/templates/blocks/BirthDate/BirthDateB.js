import React, { memo, useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { get } from 'lodash';
import Icons from '../Icons';
import { formatDate } from '../../../utils';

const BirthDateB = () => {
  const { data } = useContext(PageContext);
  const Icon = get(Icons, "birthdaycake");

  if (data.profile.birthDate) {
    return (
      <div className="text-xs flex items-center">
        <Icon
          size="10px"
          className="mr-2"
          style={{ color: data.metadata.colors.primary }}
        />
        <span className="font-medium break-all">{formatDate({ date: data.profile.birthDate, language: data.metadata.language, includeDay: true })}</span>
      </div>
    );
  }

  return null;
}

export default memo(BirthDateB);