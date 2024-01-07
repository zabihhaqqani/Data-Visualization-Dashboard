
export const fetchData = async (dispatch) => {
  try {
    const response = await fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=JUqmohllBPiCmb6v3kHkmv2SD9n4r73fRrKfOqKGxeuqK3L_NdVhiPEiFQIfwQ6ujgiyj3BRex-FJPoPxr9JoJNmlQS8gF0dm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGrHlHHZ2WJy2rOUdJUQW-F5tJT7XQlpd868DyNfuvqDCUO75XZr6bJc9xf6wLJBQ9XVEtosX-U_m1p3tdyGAy-YKHeD_m5F9dz9Jw9Md8uu&lib=MkBPI9HBDbpJAkpulLOThvdphCiP5ehFA"
    );
    const result = await response.json();
    dispatch({ type: "FETCH_DATA", payload: result.data });
  } catch (err) {
    console.error(err.message);
  }
};
