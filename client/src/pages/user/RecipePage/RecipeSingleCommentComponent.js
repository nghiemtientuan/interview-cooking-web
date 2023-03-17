import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import userImage from 'Public/assets/img/user.png';
import {pathUrl} from 'Src/routes/routes';

// actions
import {
  createNewCommentRecipesRequest,
  updateCommentRecipeRequest,
  deleteCommentRecipeRequest,
} from 'Src/actions/recipeActions';

const RecipeSingleCommentComponent = (props) => {
  const {comment: commentProps} = props;
  const dispatch = useDispatch();
  const {user: userAuth} = useSelector((state) => state.auth);
  const recipe = useSelector((state) => state.recipe);

  // local states
  const [comment, setComment] = useState(commentProps);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isShowInput, setIsShowInput] = useState(false);

  useEffect(() => {
    setComment(commentProps);
  }, [commentProps, isShowInput]);

  const handleShowUpdate = (e) => {
    e.preventDefault();
    setIsShowInput(true);
  };

  const onInputChange = (e) => {
    const {value} = e?.target;
    setComment({
      ...comment,
      content: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment?.content) {
      return;
    }

    setIsSubmitting(true);
    if (commentProps?.id) {
      // Case: update a comment
      dispatch(updateCommentRecipeRequest(recipe.id, commentProps.id, comment.content, () => {
        setIsShowInput(false);
        setIsSubmitting(false);
      }));
    } else {
      // Case: create a new comment
      dispatch(createNewCommentRecipesRequest(recipe.id, comment.content, (status) => {
        setIsSubmitting(false);
        if (status) {
          setComment({
            ...comment,
            content: '',
          });
        }
      }));
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (commentProps?.id) {
      dispatch(deleteCommentRecipeRequest(recipe.id, commentProps.id));
    }
  };

  return (
    <li>
      {
        (isShowInput || !commentProps) ? (
          <div className='uk-comment uk-comment-primary uk-visible-toggle uk-border-rounded' tabIndex='-1'>
            <form className='uk-text-center'>
              <div className='uk-width-1-1'>
                <textarea
                  id='content'
                  className='uk-textarea uk-form-large'
                  name='content'
                  placeholder='Typing here ...'
                  rows={4}
                  disabled={isSubmitting}
                  value={comment?.content}
                  onChange={onInputChange}
                ></textarea>
              </div>

              <div className='uk-width-1-1 uk-text-center'>
                {
                  commentProps && (
                    <button
                      key='cancel'
                      className='uk-button uk-button-large mt-2 mr-2'
                      disabled={isSubmitting || !comment}
                      onClick={() => setIsShowInput(false)}
                    >Hủy
                    </button>
                  )
                }
                <button
                  key='submit'
                  className='uk-button uk-button-primary uk-button-large mt-2'
                  disabled={isSubmitting || !comment}
                  onClick={handleSubmit}
                >Bình luận
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className='uk-comment uk-comment-primary uk-visible-toggle uk-border-rounded' tabIndex='-1'>
            <header className='uk-comment-header uk-position-relative'>
              <div className='uk-grid-medium uk-flex-middle' data-uk-grid>
                <div className='uk-width-auto'>
                  <img
                    className='uk-comment-avatar uk-border-circle'
                    src={userImage}
                    width='50'
                    height='50'
                    alt={comment?.user?.username}
                  />
                </div>

                <div className='uk-width-expand'>
                  <h4 className='uk-comment-title uk-margin-remove'>
                    <a className='uk-link-reset'>{comment?.user?.username}</a>
                  </h4>

                  <p className='uk-comment-meta uk-margin-remove'>
                    <a className='uk-link-reset' href='#'>12 days ago</a>
                  </p>
                </div>
              </div>

              {
                commentProps && userAuth && userAuth?.id === commentProps?.user?.id && (
                  <div className="uk-position-top-right uk-position-small uk-hidden-hover">
                    <a className="uk-link-muted mr-1" onClick={handleShowUpdate}>
                      <span data-uk-icon="icon: pencil; ratio: 1.4"></span>
                    </a>
                    <a className="uk-link-muted text-danger" onClick={handleDelete}>
                      <span data-uk-icon="icon: trash; ratio: 1.4"></span>
                    </a>
                  </div>
                )
              }
            </header>

            <div className='uk-comment-body'>
              <p>{comment?.content}</p>
            </div>
          </div>
        )
      }
    </li>
  );
};

export default RecipeSingleCommentComponent;
