import Vote from 'github-issue-vote';

const vote = new Vote({ config: {
  owner: 'hoondeveloper',
  repo: 'github-issue-vote',
  issueNumber: 2
}, title: 'ㅁㅔ로ㅇ' })
document.body.appendChild(vote.getElement());
