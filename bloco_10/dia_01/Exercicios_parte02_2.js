const techList = (techs, firstName) => {
    if (techs.length === 0) return 'Vazio!';
    const sortTechs = techs.sort();
    return sortTechs.map((item) => ({ tech: item, name: firstName }));
};

  module.exports = techList;
  