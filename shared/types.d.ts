
export type Movie = {
    movieId: number;
    genre_ids: number[];
    original_language : string;
    overview: string;
    popularity: number;
    release_date: string;
    title: string
    video: boolean;
    vote_average: number;
    vote_count: number
  };
  export type MovieCast = {
    movieId: number;
    actorName: string;
    roleName: string;
    roleDescription: string;
  };
  // Used to validate the query string og HTTP Get requests
  export type MovieCastMemberQueryParams = {
    movieId: string;
    actorName?: string;
    roleName?: string
  };
  // Review
  export type Review = {
    movieId: number;
    reviewerName: string;
    reviewDate: string;
    reviewText: string;
    reviewRating: number;
  };
  // Used to validate the query string og HTTP Get requests
  export type ReviewQueryParams = {
    movieId: string;
    reviewerName?: string;
    reviewDate?: string;
    reviewRating?: number;
    minReviewRating?: number;
  };