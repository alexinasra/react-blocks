/* @flow */
import React from 'react';
import classNames from 'classnames';
import Title from '@components/Title/Title';
import Subheader from '@components/Subheader';

type CardTitleProps = {
  className?: string,
  avatar: React.Node,
  title: string,
  subheader?: string,
  [string]: mixed
};
const CardTitle = ({
  className,
  title,
  subheader,
  avatar,
  ...props
}: CardTitleProps): React.Node => (
  <div className={classNames('card-title', { 'has-avatar': !!avatar, 'has-subheader': !!subheader }, className)} {...props}>
    {avatar && (
      <div className="avatar-container">
        {avatar}
      </div>
    )}
    <div className="text-container">
      <Title>
        {title}
      </Title>
      {
        subheader && (
          <Subheader>
            {subheader}
          </Subheader>
        )
      }
    </div>
  </div>
);

CardTitle.defaultProps = {
  subheader: undefined,
  className: undefined
};

export default CardTitle;
