import * as React from 'react';
import styles from './HelloSpFx.module.scss';
import { IHelloSpFxProps } from './IHelloSpFxProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloSpFx extends React.Component<IHelloSpFxProps, {}> {
  public render(): React.ReactElement<IHelloSpFxProps> {
    return (
      <div className={ styles.helloSpFx }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Hello,Welcome to SharePoint Online!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
