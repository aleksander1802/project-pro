import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>('articleDetails/fetchArticleById', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`);

    return response.data;
  } catch (err) {
    return rejectWithValue('error');
  }
});
