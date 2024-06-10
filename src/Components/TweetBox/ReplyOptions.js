import React from 'react';
import './ReplyOptions.css';

const ReplyOptions = ({ showOptions, replyText, selectReplyOption }) => {
  if (!showOptions) {
    return null;
  }

  return (
    <div id="reply-options" className="reply-options">
      <div className="reply-header">Who can reply?</div>
      <div className="reply-subheader">
        Choose who can reply to this post. Anyone mentioned can always reply.
      </div>
      <div className="reply-option" onClick={() => selectReplyOption('Everyone can reply')}>
        <i className="material-icons text-primary">public</i>
        <span>Everyone</span>
        <i className="material-icons text-primary check-icon">{replyText === 'Everyone can reply' && 'check'}</i>
      </div>
      <div className="reply-option" onClick={() => selectReplyOption('Accounts you follow can reply')}>
        <i className="material-icons text-primary">people</i>
        <span>Accounts you follow</span>
        <i className="material-icons text-primary check-icon">{replyText === 'Accounts you follow can reply' && 'check'}</i>
      </div>
      <div className="reply-option" onClick={() => selectReplyOption('Verified accounts can reply')}>
        <i className="material-icons text-primary">verified_user</i>
        <span>Verified accounts</span>
        <i className="material-icons text-primary check-icon">{replyText === 'Verified accounts can reply' && 'check'}</i>
      </div>
      <div className="reply-option" onClick={() => selectReplyOption('Only accounts you mention can reply')}>
        <i className="material-icons text-primary">person_add</i>
        <span>Only accounts you mention</span>
        <i className="material-icons text-primary check-icon">{replyText === 'Only accounts you mention' && 'check'}</i>
      </div>
    </div>
  );
};

export default ReplyOptions;
