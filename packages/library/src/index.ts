import createButton from './button';
import { AGREE_REACTION_TYPE, DISAGREE_REACTION_TYPE, Reactions } from './interfaces';
import { css } from './stitches';
import createText from './text';

interface Config {
  owner: string;
  repo: string;
  issueNumber: number;
}

interface Constructor {
  config: Config;
  title: string;  
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Vote {
  private containerEl: HTMLDivElement;
  private buttonContainerEl: HTMLDivElement;
  private titleEl: HTMLHeadingElement;
  private agreeButtonEl: HTMLButtonElement;
  private disagreeButtonEl: HTMLButtonElement;

  private config: Config;

  constructor({ config, title }: Constructor) {
    this.config = config;
    this.containerEl = Vote.createContainer();

    this.buttonContainerEl = Vote.createButtonContainer();
    this.titleEl = createText({ text: title, css: { padding: '5px 0' } });
    this.agreeButtonEl = createButton({ text: '👍' });
    this.disagreeButtonEl = createButton({ text: '👎' });
  
    this.buttonContainerEl.appendChild(this.agreeButtonEl);
    this.buttonContainerEl.appendChild(this.disagreeButtonEl);
  
    this.containerEl.appendChild(this.titleEl);
    this.containerEl.appendChild(this.buttonContainerEl);

    this.agreeButtonEl.addEventListener('click', async () => {
      try {
        const result = await this.handleReactionClick(AGREE_REACTION_TYPE);
        console.log(result);
      } catch(err) {
        console.error(err)
      }
    })
    this.disagreeButtonEl.addEventListener('click', async () => {
      try {
        const result = await this.handleReactionClick(DISAGREE_REACTION_TYPE);
        console.log(result);
      } catch(err) {
        console.error(err)
      }
    })
  }

  private static createContainer() {
    const containerEl = document.createElement('div');
    const containerCss = css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      padding: '10px',
      borderRadius: '10px',
    });
    containerEl.className = containerCss();
    return containerEl;
  }

  private static createButtonContainer() {
    const buttonContainerEl = document.createElement('div');
    const buttonContainerCss = css({
      display: 'flex',
      gap: 10,
    });
    buttonContainerEl.className = buttonContainerCss();

    return buttonContainerEl;
  }

  private handleReactionClick(reactionType: Reactions) {
    if (this.config == null) { 
      throw new Error('invalid config');
    }
    // const { owner, repo, issueNumber } = this.config;
    
    return new Promise(resolve => resolve(this.config))
    // return axios.post(`/repos/${owner}/${repo}/issues/${issueNumber}/reactions`, {
    //   content: reactionType
    // })
  }

  public getElement() {
    return this.containerEl;
  }
}