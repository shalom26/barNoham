(function () {


	angular.module('bn.data', [])

		// init data into data structure




		.factory('DataFactory', function ($rootScope, $http, $q, $timeout, Connections) {
			var data = {};
			var buffer = 0;
			data.languages = {};
			data.costumers = {};
			data.projects = [];

			var ctrl = this;

//building tree
			this.buildTree = function () {
				//return $q.resolve(data.projects)
				return Connections.get('projects').then(function (res) {
					console.log('res',res);
					data.projects = res.reduce(function (acc, v, i) {
						v.type = 'project';
						acc[v.id] = v;
						return acc;
					}, {});


					return Connections.get('courses').then(function (res) {
						data.courses = res.reduce(function (acc,v,i) {
							v.type = 'course';
							acc[v.id] = v ;
							return acc ;
						},{});
						for(var i in data.projects) {
							data.projects[i].childs = [];
							data.projects[i].coursesId.forEach(function (courseId) {
								data.projects[i].childs.push(data.courses[courseId])
							})
						};
						console.log('data.projects',data.projects);
						//return Connections.get('cycles').then(function (res) {
						//    console.log('cycle',3);
						//    data.cycles = res.data;
						//    data.courses.forEach(function (course) {
						//        course.cycles.forEach(function (cycleId) {
						//            data.cycles.forEach(function (cycle) {
						//                if (cycleId == cycle.id) {
						//                    course.childs.forEach(function (child) {
						//
						//                    });
						//                    course.childs.push(cycle);
						//                }
						//            })
						//        })
						//
						//    });
						//    //put data into costumers
						//    return Connections.get('costumers').then(function (res) {
						//        res.data.forEach(function (cost) {
						//            data.costumers[cost.id] = cost;
						//            buffer++;
						//        });
						//
						//    });
						//});
					});


				});
			};

//building the tree

			ctrl.dataLoaded = this.buildTree();


// put data into languages

			Connections.get('languages').then(function (res) {
				res.forEach(function (lang) {
					var tempId = lang.id;
					data.languages[tempId] = lang;
					buffer++;
				});
			});


//put data into factories

			Connections.get('factories').then(function (res) {
				data.factories = {};
				res.forEach(function (fac) {
					data.factories[fac.id] = fac;
				})
			});
//put data into costumers

			Connections.get('costumers').then(function (res) {
				res.forEach(function (cost) {
					data.costumers[cost.id] = cost;
				})
			});


			var factory = {

				getBuffer: function () {
					return buffer
				},

//projects
				getProjects: function () {
					return ctrl.dataLoaded.then(function () {
						return data.projects;
					})
				}
				, getProjectsAsArray: function () {
					var projects = [];
					return ctrl.dataLoaded.then(function () {
						for (var p in data.projects) {
							projects.push(data.projects[p]);
						}
						console.log('projects', projects);
						return $q.resolve(projects)
					});
				}
				,
				getProjectById: function (projId) {
					return $q.resolve(data.projects[projId]);
				},
				updateProj: function (proj) {
					Connections.update(proj, 'projects').then(function (addedProj) {
						data.projects[addedProj.id] = addedProj;
					})
				},
				createProj: function (proj) {
					proj.type = 'project';
					Connections.create(proj, 'projects').then(function (addedProj) {
						console.log('addedProj', addedProj);
						addedProj.type = 'project';
						data.projects[addedProj.id] = addedProj;
						$rootScope.$broadcast("newProjAdded");

					})
				},
				deleteProj: function (proj) {
					Connections.delete(proj, 'projects').then(function () {
						data.projects.forEach(function (project, index) {
							if (project.id === proj.id) {
								data.projects.splice(index, 1);
							}
						})
					})

				},

				checkUniq: function (name) {
					data.projects.forEach(function (proj) {

						return _.isMatch(name, proj.name)

					})

				},

//courses
				getCourses: function () {
					return ctrl.dataLoaded.then(function () {
						return data.courses;
					})
				},
				getCourseById: function (courseId) {
					return ctrl.dataLoaded.then(function () {
						return data.courses[courseId];
					})
				},

				getCoursesByIds : function (ids) {
					var askedCourses = [] ;
					ids.forEach(function (id) {
						askedCourses.push(data.courses[id])
					})
					return $q.resolve(askedCourses);
				},

				updateCourse: function (course) {
					course.childs = _.uniq(course.childs)
					course.cycles = _.uniq(course.cycles);
					Connections.update(course, 'courses').then(function (addedCourse) {
						// TODO: understand protocol
						data.courses.forEach(function (course) {
							if (course.id === addedCourse.id) {
								course = addedCourse;
							}
						})
					})
				},
				createCourse: function (course) {
					course.type = 'course';
					Connections.create(course, 'courses').then(function (addedCourse) {
						data.courses[addedCourse.id] = addedCourse ;
						console.log('data.courses', data.courses);
					})
				},
				deleteCourse: function (course) {
					Connections.delete(course, 'courses').then(function () {
						delete data.courses[course.id];

					})

				},

//cycles
				getCycles: function () {
					return $q.resolve(data.cycles);
				},

// factories Data
				getFactories: function () {
					return $q.resolve(data.factories);

				},
				addFact: function (factory) {
					Connections.create(factory, 'factories').then(function (addedFact) {
						console.log('addedFact', addedFact);
						data.factories[addedFact.id] = addedFact;
					})
				},
				getFactsById: function (ids) {
					var askedFacts = [];
					ids.forEach(function (id) {
						askedFacts.push(data.factories[id])
					});
					return $q.resolve(askedFacts);
				},
				deleteFact: function (fact) {
					Connections.delete(fact, 'factories').then(function () {
						delete data.factories[fact.id];

					});
				},

//costumersData
				getCostumers: function () {
					return $q.resolve(data.costumers);
				},
				getCostumerById: function (id) {
					return data.costumers[id];
				},


				addCostumer: function (costumer) {
					costumer.type = 'costumer';
					Connections.create(costumer, 'costumers').then(function (addedCost) {
						data.costumers[addedCost.id] = addedCost;
					})

				},
				deleteCostumer: function (cost) {
					Connections.delete(cost, 'costumers').then(function () {
						delete data.costumers[cost.id];
					})
				},

//LanguagesData
				getLanguages: function () {
					//return $q.resolve(angular.copy(data.languages));
					return $q.resolve(data.languages);

				},
				getLangsById: function (ids) {
					var askedLangs = [];
					ids.forEach(function (id) {
						askedLangs.push(data.languages[id])
					});
					return $q.resolve(askedLangs);
				},
				addLang: function (lang) {
					Connections.create(lang, 'languages').then(function (addedLang) {
						data.languages[addedLang.id] = addedLang;
					})
				},

				addTableGrade: function (table) {
					data.tableGrade.push(table);

				}


			}
			return factory;

		})
})
();


